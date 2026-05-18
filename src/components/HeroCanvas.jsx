import { useEffect, useRef } from 'react';

/**
 * HeroCanvas — clean dark navy background with subtle blue tints
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = rect.width;
      const h = rect.height;

      // ── 1. Deep dark navy base ──
      ctx.fillStyle = '#0b0f1a';
      ctx.fillRect(0, 0, w, h);

      // ── 2. Subtle blue tint — bottom-left area ──
      const blueBottomLeft = ctx.createRadialGradient(
        w * 0.1, h * 0.85, 0,
        w * 0.1, h * 0.85, w * 0.7
      );
      blueBottomLeft.addColorStop(0, 'rgba(20, 35, 65, 0.4)');
      blueBottomLeft.addColorStop(0.4, 'rgba(15, 25, 50, 0.2)');
      blueBottomLeft.addColorStop(1, 'rgba(11, 15, 26, 0)');
      ctx.fillStyle = blueBottomLeft;
      ctx.fillRect(0, 0, w, h);

      // ── 3. Subtle blue wash — top-left ──
      const blueTopLeft = ctx.createRadialGradient(
        w * 0.05, h * 0.1, 0,
        w * 0.05, h * 0.1, w * 0.5
      );
      blueTopLeft.addColorStop(0, 'rgba(25, 40, 70, 0.3)');
      blueTopLeft.addColorStop(0.5, 'rgba(18, 30, 55, 0.12)');
      blueTopLeft.addColorStop(1, 'rgba(11, 15, 26, 0)');
      ctx.fillStyle = blueTopLeft;
      ctx.fillRect(0, 0, w, h);

      // ── 4. Fine grain/noise texture ──
      const noiseCanvas = document.createElement('canvas');
      const noiseCtx = noiseCanvas.getContext('2d');
      noiseCanvas.width = w;
      noiseCanvas.height = h;
      const imageData = noiseCtx.createImageData(w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 8;
      }
      noiseCtx.putImageData(imageData, 0, 0);

      ctx.globalCompositeOperation = 'overlay';
      ctx.drawImage(noiseCanvas, 0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';

      // ── 5. Subtle vignette ──
      const vignette = ctx.createRadialGradient(
        w * 0.5, h * 0.45, w * 0.15,
        w * 0.5, h * 0.45, w * 0.9
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.25)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
    };

    render();
    window.addEventListener('resize', render);
    return () => window.removeEventListener('resize', render);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero__canvas"
      aria-hidden="true"
    />
  );
}
