import ServiceLayout from '../../components/ServiceLayout';
import { Coffee } from 'lucide-react';

const CoffeeMakerPage = () => (
  <ServiceLayout 
    title="Coffee Maker"
    desc="Precision thermal & pressure appliance"
    longDesc="Restore the perfect extraction for your morning ritual. We specialize in high-pressure pump diagnostics, thermal block descaling, and precise grinder calibration for all premium espresso and drip coffee systems."
    icon={<Coffee size={24} />}
    image="/coffee.jpg"
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">The art of extraction</h2>
          <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base tracking-wide">
            Great coffee depends on stable temperature and exact pressure. Our appliance repairs utilize digital flow-meters and thermal sensors to ensure your machine reaches the 9 bar pressure required for perfect espresso extraction.
          </p>
        </section>

        <section className="py-12 border-y border-gray-100 relative overflow-hidden group">
          <h3 className="text-2xl font-black mb-12 tracking-tight text-gray-950 relative z-10">Our coffee maker services include:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Fluid dynamics</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Ulka pump torque test",
                  "Brew unit lubrication",
                  "Solenoid valve descaling",
                  "Flow meter calibration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[13px] font-bold text-gray-500 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 transition-all group-hover/item:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-orange-600" />
                <h4 className="text-orange-600 font-bold uppercase text-[11px] tracking-[0.2em]">Thermal & grind</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Thermblock safety check",
                  "Burr grinder realignment",
                  "Logic board (PCB) tuning",
                  "Steam wand pressure fix"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[13px] font-bold text-gray-500 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 transition-all group-hover/item:scale-150" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-black text-gray-950 mb-6 tracking-tighter">Clinical hygiene protocol</h3>
          <p className="text-gray-500 leading-relaxed font-medium mb-12 tracking-wide text-sm">
            Coffee oils and scale buildup can damage internal valves over time. Our service includes a food-safe chemical descaling process that removes calcium deposits without affecting the delicate flavor profile of your beans.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Espresso", val: "Appliance" },
              { label: "Extraction", val: "Diagnostics" },
              { label: "9 bar", val: "Guaranteed" },
              { label: "Flavor", val: "Deployment" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-[28px] bg-gray-50 border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="text-orange-600 font-black text-[9px] uppercase mb-2 tracking-[0.2em]">{item.label}</div>
                <div className="text-gray-950 font-black text-[10px] uppercase tracking-tighter">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default CoffeeMakerPage;

