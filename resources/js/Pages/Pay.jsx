import { useForm, Head } from "@inertiajs/react";

export default function Pay({ balance }) {
    const { data, setData, post, processing, errors } = useForm({
        amount: balance || 20000, // Use balance from the controller
        meta: [], // Ensure meta is initialized as an empty array
    });

    function submit(e) {
        e.preventDefault();

        console.log("Submitting data:", data);

        post(route("chapa.pay"), {
            method: "post",
            data: {
                ...data,
                meta: Array.isArray(data.meta) ? data.meta : ["meta_data"],
            },
            onSuccess: (response) => {
                console.log("Response received:", response);

                if (response.props.paymentData && response.props.paymentData.tx_ref) {
                    const paymentData = response.props.paymentData;

                    const form = document.createElement("form");
                    form.method = "POST";
                    form.action = "https://api.chapa.co/v1/hosted/pay";

                    Object.entries(paymentData).forEach(([key, value]) => {
                        const input = document.createElement("input");
                        input.type = "hidden";
                        input.name = key;
                        input.value = value;
                        form.appendChild(input);
                    });

                    document.body.appendChild(form);
                    form.submit();
                } else {
                    console.error("Payment data missing or invalid:", response);
                    alert("Payment data is missing or invalid. Please try again.");
                }
            },
            onError: (errors) => {
                console.error("Validation errors:", errors);
                alert("An error occurred. Please check the form and try again.");
            }
        });
    }

    return (
        <>
            <Head title="Pay" />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
                        Pay {data.amount} birr for Borsa
                    </h1>
                    <p className="text-gray-600 text-center mb-4">
                        Your current balance: <span className="font-semibold">{balance} birr</span>
                    </p>
                    <form onSubmit={submit} className="space-y-4">
                        <input
                            type="number"
                            value={data.amount}
                            disabled
                            onChange={(e) => setData("amount", e.target.value)}
                            className={`border p-2 w-full rounded-md ${errors.amount ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}

                        <button 
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-gray-400"
                            disabled={processing}
                        >
                            {processing ? "Processing..." : "Pay Now"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
