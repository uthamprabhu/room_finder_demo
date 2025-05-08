import LanguageSwitcher from "../components/LanguageSwitcher";

const Admin = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-md">
                <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
                <p className="mb-4">You can manage agents and users here.</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => alert('Managing agents...')}
                >
                    Manage Agents
                </button>
            </div>
            <LanguageSwitcher />
        </div>
    );
};

export default Admin;
