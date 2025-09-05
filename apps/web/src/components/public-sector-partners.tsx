import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const logos = [
    'Accounting_Standards_Board.jpg',
    'Agricultural_Research_Council.png',
    'Air_Traffic_and_Navigation_Services_Company.jpg',
    'Airports_Company_South_Africa.gif',
    'Alexkor_Limited.png',
    'ARMSCOR.jpg',
    'BCCSA.png',
    'Blind_SA.jpg',
    'Brand_South_Africa.jpg',
    'Breede-Gouritz_CMA.png',
    'Broadband_Infraco.jpg',
    'Cape_Town_International_Airport.jpg',
    'CCMA.png',
    'Central_Energy_Fund.png',
    'Commission_for_Employment_Equity.jpg',
    'Companies_and_Intellectual_Property_Commission.jpg',
    'Compensation_Fund.png',
    'Competition_Commission.png',
    'Competition_Tribunal.jpg',
    'Council_for_Geoscience.png',
    'Council_for_Geoscience.webp',
    'Council_for_Medical_Schemes.webp',
    'Council_on_Higher_Education.png',
    'Denel.jpg',
    'Development_Bank_of_Southern_Africa.png',
    'Eskom.jpg',
    'Estate_Agency_Affairs_Board.png',
    'Export_Credit_Insurance_Corporation_of_South_Africa.jpg',
    'Film_and_Publication_Board.png',
    'Financial_Sector_Conduct_Authority.png',
    'Free_State_Development_Corporation.png',
    'Freedom_Park.jpg',
    'Government_Employees_Medical_Scheme.png',
    'Health_and_Welfare_Sector_Education_and_Training_Authority.jpg',
    'Health_Professions_Council_of_South_Africa.png',
    'Housing_Development_Agency.png',
    'Human_Sciences_Research_Council.jpg',
    'Independent_Development_Trust.jpg',
    'Industrial_Development_Corporation.jpg',
    'Ingonyama_Trust_Board.png',
    'Institute_of_People_Management.png',
    'Ithala_Development_Finance_Corporation.png',
    'Khula_Enterprise_Finance.png',
    'King_Shaka_International_Airport_logo.jpeg',
    'King_Shaka_International_Airport_logo.webp',
    'King_Shaka_International_Airport.png',
    'Land_Bank.png',
    'Legal_Aid_South_Africa.png',
    'Limpopo_Economic_Development_Enterprise.png',
    'Media_Development_and_Diversity_Agency.jpg',
    'South_African_Broadcasting_Corporation.png',
    'South_African_Bureau_of_Standards.png',
    'South_African_Civil_Aviation_Authority.png',
    'South_African_Council_for_Educators.jpg',
    'South_African_National_Blood_Service.jpg',
    'South_African_National_Parks.jpg',
    'South_African_National_Road_Agency.jpg',
    'South_African_Post_Office.jpg',
    'South_African_Qualifications_Authority.jpg',
    'South_African_Reserve_Bank.jpg',
    'South_African_Social_Security_Agency.jpg',
    'South_African_Special_Risk_Insurance_Association.jpg',
    'South_African_State_Theatre_Pretoria.jpg',
    'South_African_Tourism.jpg',
    'South_African_Veterinary_Council.jpg',
    'South_African_Weather_Service.jpg',
    'Special_Investigating_Unit.png',
];

export default function PublicSectorPartners() {
    return (
        <section id="about" className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted by South Africa's Public Sector</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            {logos.map((logo, index) => (
                                <div className="flex" key={index}>
                                    <img src={`/logos/${logo}`} alt={`Logo of ${logo.split('.')[0].replace(/_/g, ' ')}, a Unilogic partner`} className="h-12 w-auto object-contain" />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}