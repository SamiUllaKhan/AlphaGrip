import Image from "next/image";
import { BeakerIcon, ClockIcon, CurrencyRupeeIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import IntroProductImage from '../public/Images/ProductImage.png'

const features = [
    { name: 'Outcome', description: 'The transformed infinite micro textures, relatively functions as surface roughness that achieve safe slip resistance on dry surface and indicates moderately higher friction value on wet surfaces. Owing to wet floor surface, water fills in uniform matrix, the minute when the surface is walked on, the fluid expels and vacuum is created within the pattern, thus creating traction, an increased Static Coefficient Of Friction (SCOF) which results in safe and slip resistant floor surface.' },{ name: 'Impart', description: 'Alpha Grip virtually invisible floor treatment performed on existing hard floor surfaces, which partially modifies the molecular structure and generates Nano-scale textures on the surface, and in accord to manage the inherent &amp; aesthetic standards of the simulated floor surfaces that to keep gloss, colour, stain resistant, typical water absorption intensity etc.' },
    { name: 'Product Application & Usage', description: 'Alpha Grip floor treatment that overcome the slippery issues and keep retaining inherent & aesthetics properties of the floors, which are lack of slip resistance and has been a continuing source of frustration.' },
    { name: 'Floor Types Usage', description: 'Simulated Tiles: Glazed Ceramic, Vitrified, Vitrified DC &amp;GVT, Porcelain, Glass, Mosaic sealed Terracotta & Cement floors or tiles, etc. Natural Tiles: Highly polished Granite, Marble, Slate, Kota, Quartz, and sealed Lime stone etc.' },
  ]

const featuresIcons = [
  {name: 'Hazard Free', icon: BeakerIcon},
  {name: 'Cost Efficiency', icon: CurrencyRupeeIcon},
  {name: 'Safe', icon: ShieldCheckIcon},
  {name: 'Long Lasting', icon: ClockIcon},
]
function Intro() {
    return (
        <div className="bg-white">
        <div className="mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-15 lg:max-w-9xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technology Impart</h2>
            <p className="mt-4 text-gray-500">
            India’s most exceptional product formulated and manufactured precisely to ensure safe slip resistant floor surface, Alpha Grip applied to treat the existing high propensity slippery floors to protect the pedestrians from slip on dry &amp; even on wet floors.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
            
            <div className="mx-auto">
              <div className="flex flex-wrap">

              {featuresIcons.map((featuresIcon) => (
                <div key={featuresIcon.name} className="group cursor-pointer lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg" >
                      <div className="px-4 py-5 flex-auto">
                        <div
                          className="group-hover:animate-bounce text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-red-400"
                        >
                          <featuresIcon.icon />
                        </div>
                        <h6 className="text-md font-semibold">{featuresIcon.name}</h6>
                      </div>
                    </div>
                </div>
                ))}

              </div>
            </div>
  
        </div>
        <div className="grid">
          <Image
            src={IntroProductImage}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
    )
}

export default Intro
