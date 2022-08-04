# Hook-based Physics With use-cannon  

I have worked extensively with [three.js](https://github.com/mrdoob/three.js/) and [cannon-es](https://github.com/pmndrs/cannon-es) ([Poimandres](https://github.com/pmndrs)' maintained fork of [Stefan Hedman](https://github.com/schteppe)'s [cannon.js](https://github.com/schteppe/cannon.js)). While both of these offer streamlined abstractions of more complicated code, there is still a lot of boilerplate involved.

Fortunatley, the React-compatible, hook-based ecosystem developed by [Poimandres]() makes WebXR app development more streamlined and declaritive. 

In this [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) example, I leveraged [use-cannons](https://github.com/pmndrs/use-cannon)'s useCompoundBody and useFrame to create the rotating stage. For the 'robot', useSpring was enlisted for the bobbing head. 

![01_24fps](https://user-images.githubusercontent.com/42591798/182773111-109324a7-b169-4fd8-b90f-318f2db88903.gif)

The slider was enabled by [leva](https://github.com/pmndrs/leva), a hook-based GUI library, and [zustand](https://www.npmjs.com/package/zustand), a state management solution. Both are brought to you by - you guessed it - [Poimandres](https://pmnd.rs/).

## View In Sandbox
[codesandbox.io/s/usecannon-hook-usespring-example-beqvzs](https://codesandbox.io/s/usecannon-hook-usespring-example-beqvzs)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/patrick-s-young/use-spring-cannon-hook-example.git # or clone your own fork
cd use-spring-cannon-hook-example
npm install
npm start
```

## Built With
* [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber) - React renderer for three.js.
* [@react-three/cannon](https://www.npmjs.com/package/@react-three/cannon) - React hooks for cannon-es, a rigid body physics engine.
* [zustand](https://www.npmjs.com/package/zustand) - state-management solution that uses simplified flux principles.
* [leva](https://github.com/pmndrs/leva) - hook-based GUI library.
* [@react-three/drei](https://www.npmjs.com/package/@react-three/drei) - Helper library for @react-three/fiber.

## Authors

* **Patrick Young** - [Patrick Young](https://github.com/patrick-s-young)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

