interface SearchParams {
  client_id: string;
  scope: string;
  state: string;
  access_type: string;
}

enum FieldNames {
  CLIENT_ID = 'client_id',
  SCOPE = 'scope',
  STATE = 'state',
  ACCESS_TYPE = 'access_type',
  CODE = 'code',
  FAKE_FXA_EMAIL = 'fake_fxa_email',
  FAKE_TWO_FACTOR_AUTHENTICATION = 'fake_two_factor_authentication',
}

export default function Login({searchParams}: {searchParams: SearchParams}) {
  return (
    <div className="max-w-md mx-auto p-6 font-sans">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register or Log in</h2>
      <form
        method="GET"
        action="/api/auth/authenticate-callback"
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <input type="hidden" name={FieldNames.CLIENT_ID} value={searchParams.client_id} />
        <input type="hidden" name={FieldNames.SCOPE} value={searchParams.scope} />
        <input type="hidden" name={FieldNames.STATE} value={searchParams.state} />
        <input type="hidden" name={FieldNames.ACCESS_TYPE} value={searchParams.access_type} />
        <input type="hidden" name={FieldNames.CODE} value="fakecode" />

        <div className="mb-4">
          <label htmlFor="id_email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" name={FieldNames.FAKE_FXA_EMAIL} id="id_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" name={FieldNames.FAKE_TWO_FACTOR_AUTHENTICATION} className="mr-2 leading-tight" />
            <span className="text-sm text-gray-700">Enable Two-Factor Authentication</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Log in
        </button>
      </form>
    </div>
  )
}
