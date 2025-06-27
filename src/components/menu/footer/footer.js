export default function Footer() {
    return(
        <footer className="bg-gray-300 py-8 px-4 text-gray-900">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
               
                <div className="flex space-x-6 mb-4 md:mb-0">
                   
                  
                    <img className="w-10 h-10" src="https://img.icons8.com/m_outlined/512/whatsapp.png"></img>
                   
                  
                    <img className="w-10 h-10" src="https://img.icons8.com/?size=512&id=44907&format=png"></img>
                    
                    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/542/542689.png"></img>
                    
                   
                </div>

              
                <div className="text-center md:text-right text-sm">
                    <p>&copy; 2024 Made by Leonardo Yudi and Mateus Henrique</p>
                </div>
            </div>
        </footer>
    )
}