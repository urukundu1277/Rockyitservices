import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Admin() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortLatest, setSortLatest] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/customers");
      setCustomers(res.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const statuses = ["New Lead", "Contacted", "Follow Up", "Resolved"];

  const statusClasses = {
    "New Lead": "bg-yellow-100 text-yellow-800",
    Contacted: "bg-blue-100 text-blue-800",
    "Follow Up": "bg-indigo-100 text-indigo-800",
    Resolved: "bg-green-100 text-green-800",
  };

  const updateStatus = async (id, newStatus) => {
    const prev = customers;
    setCustomers((s) => s.map((c) => (c._id === id ? { ...c, status: newStatus } : c)));
    try {
      await axios.patch(`http://localhost:5000/api/customers/${id}/status`, { status: newStatus });
    } catch (err) {
      console.error(err);
      setCustomers(prev);
      alert('Failed to update status');
    }
  };

  const filtered = customers
    .filter((c) => {
    const q = query.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.toLowerCase().includes(q) ||
      c.requirement?.toLowerCase().includes(q)
    );
    })
    .filter((c) => (filterStatus === 'All' ? true : (c.status || 'New Lead') === filterStatus)
    )
    .sort((a, b) => {
      if (!sortLatest) return 0;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage customer leads and support requests</p>
          </div>

          <div className="flex items-center gap-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name, email, phone or requirement" className="border border-gray-200 rounded-lg px-4 py-2 w-72" />
            <button onClick={() => fetchCustomers()} className="px-4 py-2 bg-green-600 text-white rounded-lg">Refresh</button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow">
            <div className="text-sm text-gray-500">Total Requests</div>
            <div className="text-3xl font-bold mt-2">{customers.length}</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow">
            <div className="text-sm text-gray-500">New Leads</div>
            <div className="text-3xl font-bold mt-2 text-yellow-600">{customers.filter(c => (c.status || 'New Lead') === 'New Lead').length}</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl shadow">
            <div className="text-sm text-gray-500">Follow Ups</div>
            <div className="text-3xl font-bold mt-2 text-indigo-600">{customers.filter(c => (c.status || 'New Lead') === 'Follow Up').length}</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow">
            <div className="text-sm text-gray-500">Resolved</div>
            <div className="text-3xl font-bold mt-2 text-green-600">{customers.filter(c => (c.status || 'New Lead') === 'Resolved').length}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow mt-8 overflow-hidden">
          <div className="p-6 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Customer Requests</h2>
              <div className="text-sm text-gray-500">Manage leads and update statuses</div>
            </div>

            <div className="flex items-center gap-3">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, phone, email or requirement" className="border border-gray-200 rounded-lg px-3 py-2 w-64" />
              <select value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2">
                <option value="All">All Statuses</option>
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <button onClick={() => setSortLatest(s => !s)} className="px-3 py-2 bg-gray-100 rounded-lg">{sortLatest ? 'Sort: Latest' : 'Sort: Natural'}</button>
              <button onClick={() => fetchCustomers()} className="px-4 py-2 bg-green-600 text-white rounded-lg">Refresh</button>
            </div>
          </div>

          {loading ? (
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 bg-gray-200 rounded animate-pulse" />
            </div>
          ) : (
            <>
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-gray-600">
                  <div className="text-xl font-semibold">No requests found</div>
                  <div className="mt-3">Try changing filters or add new requests from the homepage.</div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[720px] rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-gray-100 to-white">
                      <tr className="text-sm text-gray-600">
                        <th className="p-4">Name</th>
                        <th className="p-4">Phone</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Requirement</th>
                        <th className="p-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((customer) => (
                        <tr key={customer._id} className="border-b hover:bg-gray-50 transition">
                          <td className="p-4 font-medium">{customer.name}</td>
                          <td className="p-4">{customer.phone}</td>
                          <td className="p-4">{customer.email}</td>
                          <td className="p-4 max-w-xl truncate">{customer.requirement}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusClasses[customer.status || 'New Lead'] || 'bg-gray-100 text-gray-800'}`}>{customer.status || 'New Lead'}</span>
                              <select value={customer.status || 'New Lead'} onChange={(e)=>updateStatus(customer._id, e.target.value)} className="border border-gray-200 rounded px-2 py-1 text-sm">
                                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}