export const Point = () => {
  return (
    <div className="flex gap-2 w-[500px] flex-col p-4  mt-2 mb-5 bg-slate-100 dark:bg-slate-800 dark:text-foreground rounded-lg">
      <p className="text-sm">
        <span className="font-semibold">Cara order</span> di nukuweb sangatlah
        mudah anda tinggal mengikuti langkah-langkah dibawah ini:
      </p>
      <div className="px-2">
        <div className="flex items-center ">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex items-center justify-center"></div>
          <p className="text-center text-xs mx-2">
            Pilih jasa yang diinginkan.
          </p>
        </div>

        <div className="w-0.5 h-3 bg-blue-200 rounded-lg mx-0.5"></div>

        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex items-center justify-center"></div>
          <p className="text-center text-xs mx-2">Diskusikan dengan admin.</p>
        </div>

        <div className="w-0.5 h-3 bg-blue-200 rounded-lg mx-0.5"></div>

        <div className="flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex items-center justify-center"></div>
          <p className="text-center text-xs mx-2">
            Pesanan Anda langsung diproses.
          </p>
        </div>
      </div>
    </div>
  );
};
