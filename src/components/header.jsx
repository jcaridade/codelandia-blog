import { Search } from "lucide-react";
import { ContainerWrapper } from "./container-wrapper";

export function Header() {
	return (
		<div className="bg-dark-20">
			<ContainerWrapper className="bg-dark-20 flex flex-col gap-12 py-16 items-center justify-center">
				<h1 className="text-orange text-[40px] font-medium">
					Code
					<span className="text-white">lândia</span>
				</h1>

				<div className="flex gap-4 bg-dark-30 w-full py-4 px-6 border-2 border-dark-40 rounded-lg">
					<Search className="text-orange size-8" />
					<input
						type="search"
						className="text-gray font-inter text-xl font-medium w-full bg-transparent outline-none"
					/>
				</div>
			</ContainerWrapper>
		</div>
	);
}
