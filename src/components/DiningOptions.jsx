import { CheckCircleIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    // name: 'Basic',
    id: 'tier-basic',
    href: '#',
    price: { monthly: 'Nando’s Delivery' },
    description:
      'We sometimes change our delivery areas based on demand - check if we’re delivering to you.'
    // features: [
    //   '5 products',
    //   'Up to 1,000 subscribers',
    //   'Basic analytics',
    //   '48-hour support response time'
    // ]
  },
  {
    // name: 'Essential',
    id: 'tier-essential',
    href: '#',
    price: { monthly: 'Order for Collect' },
    description: 'Plan ahead and get your PERi-PERi to-go, from a restaurant near you.'
    // features: [
    //   '25 products',
    //   'Up to 10,000 subscribers',
    //   'Advanced analytics',
    //   '24-hour support response time',
    //   'Marketing automations'
    // ]
  },
  {
    // name: 'Growth',
    id: 'tier-growth',
    href: '#',
    price: {
      monthly: 'Eat-in with us!',
      annually:
        'Already in the restaurant? Scan the QR code on your table using your phone to get started!'
    },
    description: 'Find your local and grab a seat at the table. Or booth.'
    // features: [
    //   'Unlimited products',
    //   'Unlimited subscribers',
    //   'Advanced analytics',
    //   '1-hour, dedicated support response time',
    //   'Marketing automations',
    //   'Custom reporting tools'
    // ]
  }
]

export default function DiningOptions() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flow-root">
          <div className=" grid max-w-sm grid-cols-1   sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className=" lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {tier.price.monthly}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">{tier.price.annually}</p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy plan
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
