import React from 'react';

function AddConsumption() {
  return (
    <main className="bg-white">
      <div className="max-w-sm mx-auto px-4 py-8">
        <h1 className="text-3xl text-slate-800 font-bold mb-6">Add your consumption</h1>

        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="startDate">Start Date<span className="text-rose-500">*</span></label>
              <input id="startDate" className="form-input w-full" type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="endDate">End Date<span className="text-rose-500">*</span></label>
              <input id="endDate" className="form-input w-full" type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="consumption">Consumption (KWH)<span className="text-rose-500">*</span></label>
              <input id="consumption" className="form-input w-full" type="number" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button type="submit" className="btn bg-green-500 hover:bg-green-600 text-white ml-3 whitespace-nowrap">Add Consumption</button>
          </div>
        </form>

        <div className="pt-5 mt-6 border-t border-slate-200">
          <div className="text-sm">
            <a className="font-medium text-green-500 hover:text-green-600" href="/">Back to Dashboard</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddConsumption;
