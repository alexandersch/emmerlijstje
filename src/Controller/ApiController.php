<?php


namespace App\Controller;

use App\Entity\BucketList;
use App\Repository\BucketListRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class ApiController extends AbstractController
{

    /**
     * @Route(path="/api/bucketlist")
     * @Route(path="/api/bucketlist/{slug}")
     *
     * @param BucketList           $bucketList
     * @param BucketListRepository $bucketListRepository
     *
     * @return JsonResponse
     */
    public function bucketLists(BucketListRepository $bucketListRepository, BucketList $bucketList = null): JsonResponse
    {
        if ($bucketList) {
            return new JsonResponse($bucketList);
        }

        return new JsonResponse($bucketListRepository->findBy(["public" => true]));
    }

    /**
     * @Route(path="/api/user/bucketlists")
     *
     * @param BucketListRepository $bucketListRepository
     *
     * @param Security             $security
     *
     * @return JsonResponse
     */
    public function bucketListsUser(BucketListRepository $bucketListRepository, Security $security): JsonResponse
    {
        if ($security->getUser()) {
            return new JsonResponse($bucketListRepository->findBy(["user" => $security->getUser()]));
        }

        return new JsonResponse([], Response::HTTP_NOT_FOUND);
    }

}