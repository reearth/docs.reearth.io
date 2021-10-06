---
sidebar_position: 2
---
# glTF format
------

This chapter will talk a little bit about the glTF file and share some open files that we can use as test files in Re: Earth. 

## Keywords of glTF

Today, we have many introductions about the glTF file everywhere, and here I just want to pick up some keywords that our users need to pay attention to.

### Open-source

The GL Transmission Format ( glTF for short ) is an open-source format that was released to the public in October 2015 by members of the COLLADA working group. You can check all the details on the Github page [here](https://github.com/KhronosGroup/glTF). It is also because of open-source that many platforms support this format quite well. Large companies like Google, Microsoft are trying to embed glTF formate into their environment. Other open-source communities like three.js use glTF as the main 3D files. Cesium also supports glTF at the beginning.

### Design for web

Of course, we can use formats like OBJ formate and FBX formate in webGL, but these formats are not designed for the web and are just not good enough. So webGL community needs a new format that is fit for the web. 

The glTF format solution is designed for compact file size. fast loading, run-time independence, and complete 3D scene representation. It is often described as "the JPEG of 3D". 

You can find many glTF files running online [here](https://sketchfab.com/3d-models/popular). Just have a try.

### File extensions

While using the glTF file you will find some may look a little different, some have texture files, some are not. While glTF is a format itself, it also has different file formats 😊 .

Here we use [this famous duck](https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0/Duck) as an example.

[Duck.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48869dc2-9061-4e26-9b92-339e0117db73/Duck.zip)

#### glTF
    
The glTF file is more like a default format. You can open Duck.gltf file with any IDE because it is a JSON file. You will find scene information like cameras, lights, materials, and so on. But there is no mesh information like vertex coordinates, normals, and so on. File Duck0.bin has all the mesh information, but you can not read it, because it is binary. The DuckCM.png is just the color texture for the model. When some software loads the Duck. gltf, the bin file, and the texture file will be loaded automatically.

Because Re: Earth only can upload one 3D file, this kind of format is not supported.
    
#### glTF-Embedded
    
Open Duck. gltf file you will find this is a similar JSON file in the last folder. And what is more, this file has all mesh data and image data, but nobody can read it. The only benefit of this format is having only one easily editable file, which is quite fit for our Re: Earth to use.
    
#### glTF-Binary
    
This format like the glTF-Embedded format is also composed of only one file.  This is a binary file whose suffix is .glb, and you can not open it in your IDE to see what's inside. it is also quite fit for our Re: Earth. 
  
#### glTF-Draco
    
This format is using the [Draco algorithm](https://github.com/google/draco) to make a bin file that stores mesh data quite lighter than the default format. But it is using the same structure as the default format, we can not use this way in Re: Earth. 

So, among these different glTF file formats, for now, we just use glTF-Embedded and glTF-Binary. In the next chapter, we will try to use Blender to export some glTF files.

## The open-source file you can play with

There are some files you can quickly use and play with and don't forget to check the license when you use them.

- KhronosGroup collects glTF for testing [here](https://github.com/KhronosGroup/glTF-Sample-Models)
- Re: Earth team make a [list](https://www.notion.so/ac97bfe5d5fb4a8381013703e905fb40) of open files for our users