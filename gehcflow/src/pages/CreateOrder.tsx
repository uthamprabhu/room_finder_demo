
const CreateOrder = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-md">
                <h2 className="text-3xl font-bold mb-6">Create New Order</h2>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={() => alert('Order Created')}
                >
                    Submit Order
                </button>
            </div>
        </div>
    );
};

export default CreateOrder;
