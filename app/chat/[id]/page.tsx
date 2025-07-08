export default async function page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    return <div>{params.id}</div>;
}
