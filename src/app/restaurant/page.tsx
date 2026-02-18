import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Clock4, UtensilsCrossed } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { COMPANY_INFO } from '@/lib/constants';
import { formatTel } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Restaurant — Authentic Ghanaian Cuisine',
  description:
    'Experience authentic Ghanaian dishes at BENBAX Restaurant in Katamanso Apolonia. Enjoy Jollof Rice, Banku and Okro Soup, Waakye, Fufu, Kelewele, and more.',
  keywords: [
    'Ghanaian restaurant',
    'Ghanaian food',
    'Jollof Rice Ghana',
    'Banku and Okro Soup',
    'Waakye',
    'Fufu light soup',
    'Kelewele',
    'Kontomire stew',
    'restaurant Katamanso',
    'BENBAX restaurant',
  ],
};

const MENU_ITEMS = [
  {
    id: 'jollof-rice',
    name: 'Jollof Rice',
    description:
      'Ghana\'s beloved one-pot rice dish cooked in a rich, spiced tomato sauce with onions, peppers, and aromatic seasonings. Served with your choice of grilled chicken, fried fish, or beef.',
    image: 'https://images.unsplash.com/photo-1664993101841-036f189719b6?w=600&q=80',
    tag: 'Popular',
  },
  {
    id: 'rice-kontomire',
    name: 'Rice and Kontomire Stew',
    description:
      'Fluffy steamed rice paired with kontomire (cocoyam leaf) stew — a traditional Ghanaian green stew simmered with palm oil, tomatoes, onions, and smoked fish for deep, earthy flavour.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
    tag: 'Traditional',
  },
  {
    id: 'banku-okro',
    name: 'Banku and Okro Soup',
    description:
      'Soft, fermented corn and cassava dough (banku) served with a thick, flavourful okro soup made with palm oil, crab, smoked fish, and fresh peppers. A true Ghanaian comfort dish.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80',
    tag: 'Must Try',
  },
  {
    id: 'waakye',
    name: 'Waakye',
    description:
      'A hearty Ghanaian favourite of rice and beans cooked with dried millet stalks for its signature reddish-brown colour. Topped with shito (black pepper sauce), spaghetti, boiled egg, and stew.',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80',
    tag: 'Popular',
  },
  {
    id: 'fufu-light-soup',
    name: 'Fufu with Light Soup',
    description:
      'Smooth, pounded cassava and plantain (fufu) paired with a fragrant light soup made with tomatoes, onions, chilli, and your choice of goat meat, chicken, or fish.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    tag: 'Traditional',
  },
  {
    id: 'kelewele',
    name: 'Kelewele',
    description:
      'Ripe plantain cubes seasoned with ginger, cloves, nutmeg, and chilli, then deep-fried to golden perfection. A popular Ghanaian street food enjoyed as a snack or side dish.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
    tag: 'Snack',
  },
];

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: `${COMPANY_INFO.shortName} Restaurant`,
  image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  servesCuisine: 'Ghanaian',
  telephone: COMPANY_INFO.restaurantPhone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY_INFO.location,
    addressCountry: 'GH',
  },
};

export default function RestaurantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80"
          alt="A vibrant spread of freshly prepared dishes showcasing Ghanaian culinary tradition"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur-sm">
            <UtensilsCrossed className="h-4 w-4" />
            Authentic Ghanaian Cuisine
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Taste the Flavours of Ghana
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            From rich Jollof Rice to comforting Banku and Okro Soup — experience the best of traditional Ghanaian
            cooking at BENBAX Restaurant, made with fresh local ingredients and served with warmth.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-base rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:bg-amber-400 focus:ring-amber-500"
            >
              Book a Table
            </Link>
            <a
              href={formatTel(COMPANY_INFO.restaurantPhone)}
              className="btn-base rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-slate-900 focus:ring-white"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <Section>
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">Our Menu</p>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Local Menu Highlights</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Every dish is prepared fresh daily using authentic Ghanaian recipes and locally sourced ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MENU_ITEMS.map((item) => (
            <Card key={item.id} hover className="flex h-full flex-col overflow-hidden p-0">
              <div className="relative h-52 w-full shrink-0">
                <Image
                  src={item.image}
                  alt={`${item.name} — traditional Ghanaian dish`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-900">
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">{item.name}</h3>
                <p className="flex-grow text-slate-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Dine With Us */}
      <Section background="gray">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">Why Dine With Us</p>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              A True Ghanaian Dining Experience
            </h2>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <UtensilsCrossed className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Authentic Local Recipes</h3>
                  <p>Every dish is rooted in traditional Ghanaian cooking methods passed down through generations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Fresh Local Ingredients</h3>
                  <p>We source our ingredients from local farmers and markets to ensure freshness and quality.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <Clock4 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Warm Hospitality</h3>
                  <p>Dine in a clean, welcoming environment with attentive service and a community spirit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
              alt="Beautifully presented Ghanaian cuisine with rich colours and textures"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary-dark py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,180,0,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Experience Ghanaian Flavours?</h2>
          <p className="mb-8 text-lg text-slate-300">
            Visit us at {COMPANY_INFO.location} or call ahead to place your order. We also cater for events and
            corporate gatherings.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-base rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-slate-900 hover:bg-amber-400 focus:ring-amber-500"
            >
              Contact Us
            </Link>
            <a
              href={formatTel(COMPANY_INFO.restaurantPhone)}
              className="btn-base inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-slate-900 focus:ring-white"
            >
              <Phone className="h-5 w-5" />
              {COMPANY_INFO.restaurantPhone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
