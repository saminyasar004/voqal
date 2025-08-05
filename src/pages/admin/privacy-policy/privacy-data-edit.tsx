import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@mantine/core";
import { OctagonX, Pencil, Plus, X } from "lucide-react";
import { useState } from "react";

interface Privacy {
    id: number;
    title: string;
    description: string;
    list: string[];
}

interface PrivacySectionsListProps {
    sections: Privacy[];
    onSectionsChange: (sections: Privacy[]) => void;
}

export default function PrivacySectionsList({
    sections,
    onSectionsChange,
}: PrivacySectionsListProps) {
    const [editable, setEditable] = useState<number[]>([]);

    function handleEditChange(id: number, field: keyof Privacy, value: string) {
        onSectionsChange(
            sections.map((item) =>
                item.id === id ? { ...item, [field]: value } : item,
            ),
        );
    }

    function handleListItemChange(id: number, index: number, value: string) {
        onSectionsChange(
            sections.map((privacy) => {
                if (privacy.id !== id) return privacy;

                const updatedList = [...privacy.list];
                updatedList[index] = value;

                return { ...privacy, list: updatedList };
            }),
        );
    }

    function removeListItem(id: number, index: number) {
        onSectionsChange(
            sections.map((privacy) => {
                if (privacy.id !== id) return privacy;
                const newList = privacy.list.filter((_, i) => i !== index);
                return {
                    ...privacy,
                    list: newList,
                };
            }),
        );
    }

    function addListItem(id: number) {
        onSectionsChange(
            sections.map((privacy) =>
                privacy.id === id
                    ? {
                        ...privacy,
                        list: [...privacy.list, ""],
                    }
                    : privacy,
            ),
        );
    }

    function addPrivacy() {
        const id = Math.max(...sections.map((p) => Number(p.id) || 0)) + 1;
        makeEditable(id);
        onSectionsChange([
            ...sections,
            { id, title: "", description: "", list: [] },
        ]);
    }

    function deletePrivacy(id: number) {
        onSectionsChange(sections.filter((privacy) => privacy.id !== id));
    }

    function makeEditable(id: number) {
        setEditable((prev) => [...prev, id]);
    }

    function makeUnEditable(id: number) {
        setEditable((prev) => prev.filter((p) => p !== id));
        onSectionsChange(
            sections.map((privacy) =>
                privacy.id === id
                    ? {
                        ...privacy,
                        list: privacy.list.filter((item) => item.trim() !== ""),
                    }
                    : privacy,
            ),
        );
    }

    return (
        <div className="space-y-6">
            {sections.map((privacy) => {
                const isEditing = editable.includes(privacy.id);

                return (
                    <div className="relative group/card" key={privacy.id}>
                        <Card className="border rounded-lg">
                            <CardHeader className="py-3 space-y-2">
                                {isEditing ? (
                                    <div>
                                        <Label
                                            htmlFor={`privacyTitle-${privacy.id}`}
                                            className="text-sm font-medium text-gray-900 block mb-1"
                                        >
                                            Privacy Title
                                        </Label>
                                        <Input
                                            id={`privacyTitle-${privacy.id}`}
                                            placeholder="Enter privacy title"
                                            className="w-full"
                                            value={privacy.title}
                                            onChange={(e) =>
                                                handleEditChange(privacy.id, "title", e.target.value)
                                            }
                                        />
                                    </div>
                                ) : (
                                    <h4 className="text-xl font-semibold">{privacy.title}</h4>
                                )}
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {isEditing ? (
                                    <div>
                                        <Label
                                            htmlFor={`privacyDescription-${privacy.id}`}
                                            className="text-sm font-medium text-gray-900 block mb-1"
                                        >
                                            Privacy Description
                                        </Label>
                                        <Input
                                            id={`privacyDescription-${privacy.id}`}
                                            placeholder="Enter privacy description"
                                            className="w-full"
                                            value={privacy.description}
                                            onChange={(e) =>
                                                handleEditChange(
                                                    privacy.id,
                                                    "description",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-700">{privacy.description}</p>
                                )}

                                <div
                                    className={`flex flex-col space-y-2 ${isEditing ? "border p-4 rounded-lg" : ""}`}
                                >
                                    {privacy.list.map((item, i) => (
                                        <div className="relative isolate" key={i}>
                                            {isEditing ? (
                                                <div className="group/item relative">
                                                    <Input
                                                        id={`privacyItem-${privacy.id}-${i}`}
                                                        placeholder="Enter privacy list item"
                                                        className="w-full"
                                                        value={item}
                                                        onChange={(e) =>
                                                            handleListItemChange(
                                                                privacy.id,
                                                                i,
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        onClick={() => removeListItem(privacy.id, i)}
                                                        className="group-hover/item:flex group-focus-within/item:flex hidden items-center justify-center absolute right-2 top-0 h-full"
                                                    >
                                                        <X className="!w-4 !h-4 text-red-500" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <li className="text-sm text-gray-600 list-disc list-inside">
                                                    {item}
                                                </li>
                                            )}
                                        </div>
                                    ))}

                                    {isEditing && (
                                        <div className="pt-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => addListItem(privacy.id)}
                                                className="flex items-center gap-1"
                                            >
                                                <Plus className="h-4 w-4" />
                                                Add Item
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {isEditing && (
                                    <div className="pt-4">
                                        <Button onClick={() => makeUnEditable(privacy.id)}>
                                            Done
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <div className="absolute top-2 right-4 hidden group-hover/card:flex gap-2 z-10">
                            <button
                                className="rounded-lg hover:bg-slate-900/10 p-2 text-blue-800 transition"
                                onClick={() => makeEditable(privacy.id)}
                            >
                                <Pencil className="h-4 w-4" />
                            </button>
                            <button
                                className="rounded-lg hover:bg-slate-900/10 p-2 text-red-800 transition"
                                onClick={() => deletePrivacy(privacy.id)}
                            >
                                <OctagonX className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                );
            })}

            <div>
                <Button
                    variant="outline"
                    onClick={addPrivacy}
                    className="flex items-center gap-1 px-5 rounded-sm"
                >
                    <Plus className="h-4 w-4" />
                    Add Item
                </Button>
            </div>
        </div>
    );
}
