import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
    return (
        <div>
            
            <div class="h-screen flex flex-col py-15 px-10 mt-10 mx-10 mb-10">
                <h1 className="font-bold text-center text-3xl pb-10">ChatRoom</h1>
                
                <div class="bg-gray-100 flex-1 py-10 px-10 overflow-y-scroll rounded">
                    <div class="px-4 py-2">
                        <div class="flex items-center mb-2">
                            <img class="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar" />
                            <div class="font-medium">John Doe</div>
                        </div>
                        <div class="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
                            Hi, how can I help you?
                        </div>
                        <div class="flex items-center justify-end">
                            <div class="bg-green-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                                Sure, I can help with that.
                            </div>
                            <img class="w-8 h-8 rounded-full" src="https://picsum.photos/50/50" alt="User Avatar" />
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100 px-10 py-10 mb-10">
                    <div class="flex items-center">
                        <input class="w-full border rounded-full py-3 px-2 mr-2" type="text" placeholder="Type your message..." />
                        <button class="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full">
                            Send
                        </button>
                    </div>
                </div>
            </div>
  
        </div>
    );
};

export default page;
