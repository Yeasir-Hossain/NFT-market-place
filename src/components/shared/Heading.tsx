import { integral } from '@/config/fonts';
import React from 'react';

export default function Heading({ title = '', className = '' }: { title: string, className?: string }) {
	return (
		<h1 data-aos='fade-up' data-aos-anchor-placement="center-bottom" className={`mb-16 text-left text-[28px] font-bold ${className} ${integral.className}`}>{title}</h1>
	);
}
