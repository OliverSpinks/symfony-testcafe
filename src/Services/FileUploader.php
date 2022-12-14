<?php

namespace App\Services;

use Psr\Container\ContainerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader {

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function uploadFile(UploadedFile $file)
    {
        $filename =  md5(uniqid()) . '.' . $file->guessClientExtension();
        $file->move(
            $this->container->getParameter('uploads_directory'),
            $filename
        );
        return $filename;
    }

}