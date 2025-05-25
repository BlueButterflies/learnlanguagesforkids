import React from "react";

const Alphabet = () => {
    return (
        <div className="alphabet">
            <h1>Alphabet</h1>
            <p>Here you can learn the English alphabet.</p>
            <ul>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
                    <li key={letter}>{letter}</li>
                ))}
            </ul>
        </div>
    );
}

export default Alphabet;