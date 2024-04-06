import { ContainerWrapper } from "./container-wrapper";

export function Footer() {
	return (
		<ContainerWrapper className="pb-4 text-center">
			<p className="font-medium text-gray">
				Desenvolvido por
				<a
					className="text-orange hover:text-orange/90 hover:font-medium"
					href="https://github.com/jcaridade/">
					{" "}
					Joyce
				</a>
			</p>
		</ContainerWrapper>
	);
}
