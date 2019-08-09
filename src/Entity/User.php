<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface, JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $displayName;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\BucketList", mappedBy="user", orphanRemoval=true)
     */
    private $bucketLists;

    public function __construct()
    {
        $this->bucketLists = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserame(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string)$this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string)$this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return mixed
     */
    public function getDisplayName()
    {
        return $this->displayName;
    }

    /**
     * @param mixed $displayName
     */
    public function setDisplayName($displayName): void
    {
        $this->displayName = $displayName;
    }

    public function jsonSerialize()
    {
        return [
            "username" => $this->getUsername(),
            "displayName" => $this->getDisplayName(),
            "roles" => $this->getRoles()
        ];
    }

    /**
     * @return Collection|BucketList[]
     */
    public function getBucketLists(): Collection
    {
        return $this->bucketLists;
    }

    public function addBucketList(BucketList $bucketList): self
    {
        if (!$this->bucketLists->contains($bucketList)) {
            $this->bucketLists[] = $bucketList;
            $bucketList->setUser($this);
        }

        return $this;
    }

    public function removeBucketList(BucketList $bucketList): self
    {
        if ($this->bucketLists->contains($bucketList)) {
            $this->bucketLists->removeElement($bucketList);
            // set the owning side to null (unless already changed)
            if ($bucketList->getUser() === $this) {
                $bucketList->setUser(null);
            }
        }

        return $this;
    }
}
