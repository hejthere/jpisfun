import React from 'react';

export default function Section(props) {
    return (
        <div>
            {props.sections.map(section =>
                <section className="mt-0 mb-3" key={section.id}>
                    {section.page}
                </section>)}
        </div>)
}
