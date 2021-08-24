import Image from "next/image";
import IntroProductImage from '../public/Images/ProductImage.png'

const features = [
    { name: 'Product Application & Usage', description: 'Alpha Grip floor treatment that overcome the slippery issues and keep retaining inherent & aesthetics properties of the floors, which are lack of slip resistance and has been a continuing source of frustration.' },
    { name: 'Floor Types Usage', description: 'Simulated Tiles: Glazed Ceramic, Vitrified, Vitrified DC &amp;GVT, Porcelain, Glass, Mosaic sealed Terracotta & Cement floors or tiles, etc. Natural Tiles: Highly polished Granite, Marble, Slate, Kota, Quartz, and sealed Lime stone etc.' },
    { name: 'Outcome', description: 'The transformed infinite micro textures, relatively functions as surface roughness that achieve safe slip resistance on dry surface and indicates moderately higher friction value on wet surfaces. Owing to wet floor surface, water fills in uniform matrix, the minute when the surface is walked on, the fluid expels and vacuum is created within the pattern, thus creating traction, an increased Static Coefficient Of Friction (SCOF) which results in safe and slip resistant floor surface.' },
    { name: 'Impart', description: 'Alpha Grip virtually invisible floor treatment performed on existing hard floor surfaces, which partially modifies the molecular structure and generates Nano-scale textures on the surface, and in accord to manage the inherent &amp; aesthetic standards of the simulated floor surfaces that to keep gloss, colour, stain resistant, typical water absorption intensity etc.' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]

function Intro() {
    return (
        <div className="bg-white">
      <div className="mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-15 lg:max-w-9xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technology Impart</h2>
          <p className="mt-4 text-gray-500">
          Alpha Grip virtually invisible floor treatment performed on existing hard floor surfaces,
which partially modifies the molecular structure and generates Nano-scale textures on
the surface, and in accord to manage the inherent &amp; aesthetic standards of the
simulated floor surfaces that to keep gloss, colour, stain resistant, typical water
absorption intensity etc.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
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
