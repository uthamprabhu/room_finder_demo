import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod validation for agent profile
const agentSchema = z.object({
    name: z.string().nonempty('Name is required'),
    dob: z.string().nonempty('Date of birth is required'),
    gender: z.enum(['Male', 'Female', 'Other'], {
        errorMap: () =>
        ({
            message: 'Gender is required'
        })
    }),
    number: z.string().nonempty('Phone number is required'),
    email: z.string().email('Invalid email').nonempty('Email is required'),
    order: z.string().nonempty('Order is required'),
});

type AgentForm = z.infer<typeof agentSchema>;

const AgentSignup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AgentForm>({
        resolver: zodResolver(agentSchema),
    });

    const onSubmit = (data: AgentForm) => {
        console.log('Agent profile created:', data);
        alert('Agent profile created!');
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white shadow-lg rounded-md">
                <h2 className="text-2xl font-bold mb-4">Create Agent Profile</h2>
                <div>
                    <label className="block text-sm">Name</label>
                    <input
                        type="text"
                        {...register('name')}
                        className="w-full p-2 border rounded-md mb-3"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>
                <div>
                    <label className="block text-sm">Date of Birth</label>
                    <input
                        type="date"
                        {...register('dob')}
                        className="w-full p-2 border rounded-md mb-3"
                    />
                    {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                </div>
                <div>
                    <label className="block text-sm">Gender</label>
                    <select {...register('gender')} className="w-full p-2 border rounded-md mb-3">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
                </div>
                <div>
                    <label className="block text-sm">Phone Number</label>
                    <input
                        type="text"
                        {...register('number')}
                        className="w-full p-2 border rounded-md mb-3"
                    />
                    {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
                </div>
                <div>
                    <label className="block text-sm">Email</label>
                    <input
                        type="email"
                        {...register('email')}
                        className="w-full p-2 border rounded-md mb-3"
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div>
                    <label className="block text-sm">Order</label>
                    <input
                        type="text"
                        {...register('order')}
                        className="w-full p-2 border rounded-md mb-3"
                    />
                    {errors.order && <span className="text-red-500 text-sm">{errors.order.message}</span>}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md mt-3">Create Agent</button>
            </form>
        </div>
    );
};

export default AgentSignup;
