import React from "react";

interface ICardProps {
    heading: string;
}

export function Card({ heading }: ICardProps) {
    return (
        <div className="card">
            <span class="dot" />
            <div>
                <div className="card-line">
                    <div className="card-primary-big">Primary</div>
                    <div className="card-primary-small">1234567890</div>
                </div>
                <div className="card-line secondary">
                    <div>{heading}</div>
                </div>
            </div>
        </div>
    );
}
