'use client';

export default function Examplescomp() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 lg:p-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
          Very Simple Facebook/ChatGpt Agent
        </h1>
        <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl flex justify-center">
          <video
            controls
            className="w-3/4 rounded-lg shadow-lg"
          >
            <source src="\static\images\fbagentvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1 className="text-lg md:text-xl lg:text-2xl mt-12 space-y-4 text-center">
          <p> SCROLL DOWN FOR MORE INFO.</p>
          <p>- Agents can also listen to voice and understand instructions.</p>
          <p>- Agents can be made to take instructions remotely by calling a virtual phone on your computer.</p>
          <p>- Agents can be made to understand complex CRM functionality and documents.</p>
          <p>- Agents can be made to perform scheduled tasks at different times with no human intervention.</p>
          <p>- Agents DO NOT violate HIPAA laws because all data is self-contained on your device.</p>
          <p>- Agents DO NOT send ANY information or data to any other device. It does not communicate with anything outside of your computer.</p>
        </h1>
      </div>
    );
}
