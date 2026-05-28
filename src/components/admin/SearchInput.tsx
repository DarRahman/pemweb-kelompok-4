"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Search, Loader2 } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  defaultValue?: string;
}

export default function SearchInput({
  placeholder = "Cari...",
  defaultValue = "",
}: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(defaultValue);
  const [isPending, startTransition] = useTransition();

  // Sinkronkan state lokal jika default value berubah dari URL
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      });
    }, 400); // 400ms debounce

    return () => clearTimeout(handler);
  }, [value, pathname, router, searchParams]);

  return (
    <div className="relative w-full sm:w-80">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
        {isPending ? (
          <Loader2 className="text-[#ff6700] animate-spin" size={16} />
        ) : (
          <Search className="text-gray-400" size={16} />
        )}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#ff6700] focus:bg-white transition-all text-black placeholder-gray-400 shadow-sm"
      />
    </div>
  );
}
