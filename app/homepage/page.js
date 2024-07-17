import Feed from '@components/Feed';


const page = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Luna AI
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">GenerativeAI-CustomerService</span>
        </h1>
        
        <p className="desc text-center align-center">Luna AI An open-source chatbot leveraging Generative AI to elevate Customer Service experiences.</p>
     
     <Feed />
    </section>
  )
}

export default page