export default function Footer() {
  return (
    <footer className="bg-[#2A1A0B] text-white">
      <div className="mx-auto max-w-screen-xl px-20 py-16">
        {/* Top Footer */}
        <div className="flex justify-between">
          {/* Brand */}
          <div>
            <h2 className="mb-3 text-4xl font-serif">
              Monkey Coffee
            </h2>

            <p className="text-xs text-white/70">
              Crafting moments, one cup at a time.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="mb-4 text-xs font-medium">
              MENU
            </h3>

            <ul className="space-y-2 text-xs font-normal text-white/80">
              <li>Our Signatures</li>
              <li>Non Coffee</li>
              <li>Food</li>
              <li>Pastry</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-xs font-medium">
              CONNECT
            </h3>

            <ul className="space-y-2 text-xs font-normal text-white/80">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}
        <p className="text-xs text-white/60">
          © 2026 Monkey Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}