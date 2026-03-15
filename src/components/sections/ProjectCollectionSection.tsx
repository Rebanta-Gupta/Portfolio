import type { ProjectItem } from '../../types';
import { PortfolioIconSvg } from '../../utils/icons';

interface ProjectCollectionSectionProps {
	sectionId: string;
	title: string;
	items: ProjectItem[];
	onOpenProject: (projectId: string, fromSection: string) => void;
}

function ProjectCollectionCard({
	item,
	sectionId,
	onOpenProject,
}: {
	item: ProjectItem;
	sectionId: string;
	onOpenProject: (projectId: string, fromSection: string) => void;
}) {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onOpenProject(item.id, sectionId);
		}
	};

	return (
		<div
			className="group reveal flex cursor-pointer items-center gap-5 rounded-2xl border border-slate-300/12 bg-slate-900/72 p-6 backdrop-blur-xs transition hover:-translate-y-1 hover:border-sky-300/35 hover:shadow-[0_8px_32px_rgba(56,189,248,0.12)] max-[768px]:flex-wrap"
			onClick={() => onOpenProject(item.id, sectionId)}
			onKeyDown={handleKeyDown}
			tabIndex={0}
			role="button"
			aria-label={`View details for ${item.title}`}
		>
			<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-3xl">
				<PortfolioIconSvg name={item.icon} className="h-8 w-8 text-sky-100" />
			</div>
			<div className="flex-1">
				<h3 className="mb-1 text-xl font-semibold text-slate-50">{item.title}</h3>
				<p className="text-sm leading-6 text-slate-400">{item.brief}</p>
			</div>
			<span
				className="shrink-0 text-2xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-100"
				aria-hidden="true"
			>
				→
			</span>
		</div>
	);
}

export default function ProjectCollectionSection({
	sectionId,
	title,
	items,
	onOpenProject,
}: ProjectCollectionSectionProps) {
	return (
		<section id={sectionId} className="section px-6 py-20 max-[480px]:px-4 max-[480px]:py-12">
			<div className="mx-auto w-full max-w-[1100px]">
				<h2 className="reveal mb-12 inline-block border-b-2 border-sky-300 pb-2 text-3xl font-bold text-slate-50">
					{title}
				</h2>
				<div className="grid gap-5">
					{items.map(item => (
						<ProjectCollectionCard
							key={item.id}
							item={item}
							sectionId={sectionId}
							onOpenProject={onOpenProject}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
