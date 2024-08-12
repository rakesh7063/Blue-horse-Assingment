
export default function InputFiledData ({user, setUser, submitHandle,logData}){

    return(
        <form onSubmit={submitHandle} className="space-y-4 w-64 mt-3">
        <div className="w-64">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 space-y-6">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
          
            value={user.email}
          
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-2 mt-7 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 space-y-6"
          />
        </div>
        <div className="w-64">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
           
            value={user.password}
           
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full p-2 mt-1 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button 
          type="submit"
          className="text-center py-2 mt-7 text-grey bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {logData? "SingUp" : "LogIn"}
        </button>
      </form>
    )
}