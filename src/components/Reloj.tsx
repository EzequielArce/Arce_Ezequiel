type relojProps = {
    timeZone: string;
    label : string;
    imgSrc : string;
}

export default function ({timeZone, label, imgSrc}: relojProps){
    const now = new Date().toLocaleTimeString("es-AR",{
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: timeZone,
    });

    return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow text-center">
      {/* Nombre de la ciudad */}  
      <h2 className="text-xl font-semibold mb-2">{label}</h2>

      {/* Imagen de la ciudad */}
      <img  
      src={imgSrc}
      alt={label}
      className="mx-auto mb-4 w-48 h-48 object-cover rounded-full shadow-lg"
      />
      {/* Nombre de la ciudad */}  
      <p className="text-2xl font-mono"> {now}</p>
    </div>
  );
}