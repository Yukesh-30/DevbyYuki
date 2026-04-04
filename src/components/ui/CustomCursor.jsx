import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const onMouseDown = () => {
            gsap.to(cursor, { scale: 0.5 });
            gsap.to(follower, { scale: 1.5 });
        };

        const onMouseUp = () => {
            gsap.to(cursor, { scale: 1 });
            gsap.to(follower, { scale: 1 });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
            <div ref={followerRef} className="custom-cursor-follower hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />
        </>
    );
};

export default CustomCursor;
