<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ListEntryRepository")
 */
class ListEntry implements JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $link;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\BucketList", inversedBy="entries")
     * @ORM\JoinColumn(nullable=false)
     */
    private $bucketList;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getBucketList(): ?BucketList
    {
        return $this->bucketList;
    }

    public function setBucketList(?BucketList $bucketList): self
    {
        $this->bucketList = $bucketList;

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "description" => $this->getDescription(),
            "link"        => $this->getLink(),
        ];
    }
}
