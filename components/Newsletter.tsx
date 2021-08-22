interface Form {
  id: number;
  title?: string;
  subTitle?: string;
  subTitle2?: string;
}

interface Props {
  form: Form;
  noHeader?: boolean;
  showSubscribers?: boolean;
}

const Newsletter = ({ form, noHeader, showSubscribers }: Props) => (
  <form
    className="max-w-2xl mx-auto px-1 py-1 bg-indigo-50 rounded-b text-gray-700 shadow-md"
    action={`https://app.convertkit.com/forms/${form.id}/subscriptions`}
    method="post"
  >
    <div data-style="full" className="px-2 py-2 w-full">
      <div data-element="column" className="prose">
        {!noHeader ? (
          <>
            <h3 className="text-xl text-center font-bold" data-element="header">
              {form.title}
            </h3>

            <div data-element="subheader">
              <p>{form.subTitle}</p>
              {form.subTitle2 ? <p>{form.subTitle2}</p> : null}
            </div>
          </>
        ) : null}

        <ul data-element="errors" data-group="alert" />

        <div className="flex flex-col sm:flex-row mt-4" data-element="fields">
          <label
            htmlFor="fields[first_name]"
            className="flex-1 sm:w-full block text-sm font-medium leading-5 text-gray-700 mr-1"
          >
            First Name
            <input
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1 shadow-sm p-1"
              aria-label="Your first name"
              name="fields[first_name]"
              placeholder="Jane"
              id="fields[first_name]"
              type="text"
              required
            />
          </label>

          <label
            htmlFor="email_address"
            className="sm:mt-0 mt-4 flex-1 sm:w-full block text-sm font-medium leading-5 text-gray-700 mr-1"
          >
            Email
            <input
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mt-1 shadow-sm p-1"
              name="email_address"
              id="email_address"
              aria-label="Your email address"
              placeholder="jane@acme.com"
              required
              type="email"
            />
          </label>

          <button
            type="submit"
            data-element="submit"
            className="flex-1 sm:w-full mt-4 sm:mt-0 bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-1 rounded"
          >
            <span className="w-full text-center">Yup, sign me up!</span>
          </button>
        </div>
        {showSubscribers ? (
          <p className="text-center block text-sm font-medium leading-5 text-gray-700">
            Join 300 React developers that have signed up so far!
          </p>
        ) : null}
      </div>
    </div>
  </form>
);

Newsletter.defaultProps = {
  noHeader: false,
  showSubscribers: false,
};

export default Newsletter;
