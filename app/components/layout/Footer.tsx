export const Footer = () => {
  return (
    <footer className="py-6 mt-18 border bg-gray-100/50 rounded-sm backdrop-blur-sm overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center text-black-300 text-xs flex justify-between">
        <p>
          © {new Date().getFullYear()} West Auckland Water Blasting. All rights
          reserved.
        </p>
        <p>
          Website Made in West Auckland,{' '}
          <span className="font-semibold"> by Taine Buchan</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
