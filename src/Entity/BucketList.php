<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BucketListRepository")
 */
class BucketList implements JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ListEntry", mappedBy="bucketList", orphanRemoval=true)
     */
    private $entries;

    /**
     * @ORM\Column(type="boolean")
     */
    private $public = false;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $slug;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="bucketLists")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    public function __construct()
    {
        $this->entries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|ListEntry[]
     */
    public function getEntries(): Collection
    {
        return $this->entries;
    }

    public function addEntry(ListEntry $entry): self
    {
        if (!$this->entries->contains($entry)) {
            $this->entries[] = $entry;
            $entry->setBucketList($this);
        }

        return $this;
    }

    public function removeEntry(ListEntry $entry): self
    {
        if ($this->entries->contains($entry)) {
            $this->entries->removeElement($entry);
            // set the owning side to null (unless already changed)
            if ($entry->getBucketList() === $this) {
                $entry->setBucketList(null);
            }
        }

        return $this;
    }

    public function getPublic(): ?bool
    {
        return $this->public;
    }

    public function setPublic(bool $public): self
    {
        $this->public = $public;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "name"  => $this->getName(),
            "slug"  => $this->getSlug(),
            "user"  => $this->getUser(),
            "items" => $this->getEntries()->getValues(),
        ];
    }
}
