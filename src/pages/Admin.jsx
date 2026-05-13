import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

export default function Admin() {

  const [customers, setCustomers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchCustomers();

  }, []);

  const fetchCustomers = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/customers"
      );

      setCustomers(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-16">

        {/* TITLE */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-bold text-gray-800">

              Admin Dashboard

            </h1>

            <p className="mt-3 text-gray-600 text-lg">

              Manage customer leads and support requests

            </p>

          </div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-gray-500 text-lg">

              Total Leads

            </h2>

            <h1 className="text-5xl font-bold mt-4">

              {customers.length}

            </h1>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-gray-500 text-lg">

              New Requests

            </h2>

            <h1 className="text-5xl font-bold mt-4 text-green-500">

              {customers.length}

            </h1>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h2 className="text-gray-500 text-lg">

              Active Support

            </h2>

            <h1 className="text-5xl font-bold mt-4 text-blue-500">

              {customers.length}

            </h1>

          </div>

        </div>

        {/* CUSTOMER TABLE */}

        <div className="bg-white rounded-3xl shadow-xl mt-14 overflow-hidden">

          <div className="p-8 border-b">

            <h2 className="text-3xl font-bold">

              Customer Requests

            </h2>

          </div>

          {

            loading

              ? (

                <div className="p-10 text-xl">

                  Loading...

                </div>

              )

              : (

                <div className="overflow-x-auto">

                  <table className="w-full">

                    <thead className="bg-gray-100">

                      <tr>

                        <th className="text-left p-5">
                          Name
                        </th>

                        <th className="text-left p-5">
                          Phone
                        </th>

                        <th className="text-left p-5">
                          Email
                        </th>

                        <th className="text-left p-5">
                          Requirement
                        </th>

                        <th className="text-left p-5">
                          Status
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {

                        customers.map((customer) => (

                          <tr
                            key={customer._id}
                            className="border-b hover:bg-gray-50"
                          >

                            <td className="p-5 font-semibold">

                              {customer.name}

                            </td>

                            <td className="p-5">

                              {customer.phone}

                            </td>

                            <td className="p-5">

                              {customer.email}

                            </td>

                            <td className="p-5">

                              {customer.requirement}

                            </td>

                            <td className="p-5">

                              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                                {customer.status}

                              </span>

                            </td>

                          </tr>

                        ))

                      }

                    </tbody>

                  </table>

                </div>

              )

          }

        </div>

      </section>

    </div>

  );

}