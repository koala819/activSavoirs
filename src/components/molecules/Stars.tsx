"use client";
import { PiStarDuotone, PiStarHalfDuotone } from "react-icons/pi";
import { Text } from "../atoms/Text";

export function Stars({
  beforeStars,
  afterStars,
}: {
  beforeStars: string;
  afterStars: string;
}) {
  return (
    <div className='flex space-x-4 items-center'>
      <Text text={beforeStars} />
      <div className='flex'>
        <PiStarDuotone size={24} className='text-yellow-400' />
        <PiStarDuotone size={24} className='text-yellow-400' />
        <PiStarDuotone size={24} className='text-yellow-400' />
        <PiStarHalfDuotone size={24} className='text-yellow-400' />
        <PiStarDuotone size={24} className='text-gray-300' />
      </div>
      <Text text={afterStars} />
    </div>
  );
}
