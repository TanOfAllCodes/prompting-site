/* Custom 404 page so that Next.js exports 404.html for GitHub Pages */
export default function NotFound() {
  return (
    <div className="content-section space-y-4">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-gray-700">That page does not exist. Use the sidebar to navigate.</p>
    </div>
  )
}
