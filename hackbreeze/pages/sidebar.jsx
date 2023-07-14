const sidebar = () => {
  return (
    <div className="flex items-start justify-end text-sm w-1/15 flex-col min-h-screen bg-[#7B2869] mt-10 rounded-lg">
        <button className=" bg-[url('/img/download.png')] top-[117px] rounded-full w-full">profile</button>
        <button className=" bg-blue-200 rounded-full">Dark</button>
        <button className=" bg-red-200 rounded-full">Settings</button>
    </div>
  )
}
export default sidebar