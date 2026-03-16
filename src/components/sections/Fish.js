import Image from "next/image"

export default function Fish(){
  return(
    <section id="ikan" className="bg-black text-white py-24">

      <h2 className="text-4xl text-center font-bold mb-16">
        Ikan yang Cocok
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        <div className="text-center">
          <Image src="/arwana.jpg" width={200} height={150} alt="arwana"/>
          <p className="mt-3">Arwana</p>
        </div>

        <div className="text-center">
          <Image src="/louhan.jpg" width={200} height={150} alt="louhan"/>
          <p className="mt-3">Louhan</p>
        </div>

        <div className="text-center">
          <Image src="/oscar.jpg" width={200} height={150} alt="oscar"/>
          <p className="mt-3">Oscar</p>
        </div>

        <div className="text-center">
          <Image src="/cichlid.jpg" width={200} height={150} alt="cichlid"/>
          <p className="mt-3">Cichlid</p>
        </div>

      </div>

    </section>
  )
}