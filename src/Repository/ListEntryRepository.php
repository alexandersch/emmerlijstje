<?php

namespace App\Repository;

use App\Entity\ListEntry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ListEntry|null find($id, $lockMode = null, $lockVersion = null)
 * @method ListEntry|null findOneBy(array $criteria, array $orderBy = null)
 * @method ListEntry[]    findAll()
 * @method ListEntry[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ListEntryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ListEntry::class);
    }

    // /**
    //  * @return ListEntry[] Returns an array of ListEntry objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ListEntry
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
