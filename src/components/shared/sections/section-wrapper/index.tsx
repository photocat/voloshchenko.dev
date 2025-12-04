/**
 * SectionWrapper Component
 * @return {JSX.Element} A styled section element that wraps its children.
 */

import React from 'react';

const DEFAULT_CLASS = 'section justify-between items-center gap-6 lg:gap-8 flex-wrap lg:flex-nowrap';
type SectionProps = React.ComponentPropsWithoutRef<'section'>;

const SectionWrapper = ({ children, className, ...props }: SectionProps) => {
    const combinedClassName = [DEFAULT_CLASS, className].filter(Boolean).join(' ');
    return (
        <section className={combinedClassName} {...props}>
            {children}
        </section>
    );
};

export default SectionWrapper;
