import React from "react"
import { notFound } from "next/navigation"
import carouselData from "../../data/hero-carousel.json"
import ClientActivityDetail from "./client-page"

interface PageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    return carouselData.map((item) => ({
        id: item.id.toString(),
    }))
}

export default function ActivityDetailPage({ params }: PageProps) {
    const item = carouselData.find((i) => i.id.toString() === params.id)

    if (!item) {
        notFound()
    }

    return <ClientActivityDetail item={item} />
}
