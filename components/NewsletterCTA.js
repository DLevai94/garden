const NewsletterCTA = ({
  title = '100+ developers like you are already getting jacked 💪 on the business-side of software development.',
  description = 'Do you want to join them?',
  cta = 'Let me in!',
}) => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-pj">{title}</h2>
          <p className="max-w-md mx-auto mt-5 text-base font-normal text-gray-600 font-pj">
            {description}
          </p>
        </div>
        <div className="relative max-w-lg mx-auto mt-14">
          <div className="absolute -inset-x-2 -inset-y-5">
            <div
              className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              }}
            />
          </div>
          <form
            action="http://business-of-it.davidlevai.com/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
            className="relative"
          >
            <input
              type="email"
              name="member[email]"
              id="member_email"
              placeholder="Enter your email address"
              className="revue-form-field block w-full px-5 py-6 text-base font-normal text-black placeholder-gray-600 bg-white border border-gray-300 rounded-xl focus:border-black focus:ring-1 focus:ring-black font-pj focus:outline-none"
              required
            />

            <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
              <button
                type="submit"
                className="
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    px-8
                    py-4
                    text-base
                    font-bold
                    text-white
                    transition-all
                    duration-200
                    bg-gray-900
                    border border-transparent
                    sm:w-auto sm:py-3
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                    font-pj
                    hover:bg-opacity-90
                    rounded-xl
                "
              >
                {cta}
              </button>
            </div>
          </form>
        </div>
        <p className="mt-6 text-sm font-normal text-center text-gray-500 font-pj">
          No spam ever. I promise.
        </p>
      </div>
    </section>
  )
}

export default NewsletterCTA
