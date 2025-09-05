import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from "sonner";
import confetti from 'confetti-js';

interface ContactFormProps {
  trigger: React.ReactNode;
}

export function ContactFormModal({ trigger }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate that we have all required fields
    if (!data.firstName || !data.lastName || !data.email || !data.department || !data.message) {
      toast.error("Form submission failed", {
        description: "Please fill in all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Since we're now using rootDirectory in vercel.json, the API endpoint is relative to the web app
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "We've received your message and will contact you soon.",
        });
        setIsSubmitted(true);
        // Trigger confetti from the button position
        if (buttonRef.current && canvasRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
          
          // Set canvas dimensions
          const canvas = canvasRef.current;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          
          const confettiSettings = {
            target: 'confetti-canvas',
            max: 150,
            size: 1,
            animate: true,
            props: ['circle', 'square'],
            colors: [[0, 0, 0], [255, 255, 255]], // Black and white
            clock: 25,
            rotate: true,
            start_from_edge: false,
            respawn: false,
            x,
            y,
          };
          
          // Clear any existing confetti
          const confettiInstance = new confetti.Confetti('confetti-canvas', confettiSettings);
          confettiInstance.render();
          
          // Stop confetti after 3 seconds
          setTimeout(() => {
            confettiInstance.clear();
          }, 3000);
        }
        
        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        toast.error("Form submission failed", {
          description: errorData.message || "Please try again later.",
        });
        console.error('Form submission failed:', errorData);
      }
    } catch (error) {
      toast.error("An error occurred", {
        description: "Please try again later.",
      });
      console.error('An error occurred during form submission', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Partner with unilogic</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
                <svg className="size-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="text-2xl font-bold mb-2">Message Sent!</div>
              <p className="text-muted-foreground">
                We've received your message and will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" name="firstName" placeholder="John" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john.doe@department.gov.za" required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="department">Department/Organization</Label>
                <Input id="department" name="department" placeholder="Department of..." required />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="message">How can we help?</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or requirements..."
                  className="border-input flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  ref={buttonRef}
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Canvas for confetti */}
      <canvas 
        id="confetti-canvas" 
        ref={canvasRef}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none', 
          zIndex: 9999 
        }}
      />
    </>
  );
}