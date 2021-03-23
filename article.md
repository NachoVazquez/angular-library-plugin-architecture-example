The plugin architecture is a well-known software design pattern used for its flexibility, extensibility, and isolation. It consists of a core system and several separate plugin modules. 
We will cover how to create a plugin-based architecture in Angular using its Dependency Injection system and why this is an excellent tool to have in our Engineers belt.
 Plugin Architecture
The Plugin Architecture concept is simple: the system core manages the essential functionalities and orchestrates the plugins, but it is agnostic of its behavior. The plugins implement the use-case-specific functionalities, and they are agnostic of other plugins and the system behavior. 
The system core is responsible for defining the contract used by itself and the plugins to communicate.

Plugins aren't necessarily designed for a particular core system, but in those cases, an adapter is required to make the plugins follow the contract. 
The main principles related to this kind of Architecture are the Inversion of Control (IoC) Principle and the Dependency Inversion Principle (DIP, the D from the SOLID principles)
While the Plugins follow the IoC by extracting behavior and control from the main flow or core system, the DIP is necessary for avoiding coupling and establishing the contract.
Dependency Injection is not the only design pattern that allows building a Plugin Architecture or follow the IoC Principle; callbacks, schedulers, event loops, and message queues are also valid options.
Plugin-based Angular Libraries
The Angular community is big and healthy, every day, new packages get published, and our favorite tools get renewed. 
In this constellation, not all libraries are built using a Plugin Architecture, and with a good reason. This pattern is NOT a silver bullet, and you should not try to design all your libraries using Plugins.
But there are some scenarios where the Plugin Architecture provides outstanding flexibility and relief maintainers from creating all possible features for a given domain. 
For example, in Components libraries, using content projection is a great way to achieve IoC. From there, it is pretty easy to build plugins that extend your core Component functionality or customize the UI.
In this article, we will focus on another of the design patterns implemented in Angular, the Dependency Injection (DI) pattern.

Implementing a Plugin Architecture with Dependency Injection
As described previously, the Plugin Architecture has two components. The Core System and the plugins.
The Plugins depend on the Core System, but not the other way around. Therefore we should start designing the Core System first.
The minimum elements we are going to need are 
PluginContract, this is the contract that our Plugins will implement and that the Core System uses for communication.
PluginInjectionToken, in some technologies, the 
PluginContract would be used as the injection token. Still, since interfaces are not genuine artifacts in typescript and they disappear at build time, we have to define an additional token. It is good to notice that this splitting also contributes to the separation of concerns.
OrchestrationService will gather all the plugins, orchestrate their behavior, and provide error resolution.
We will also have some configuration elements, optional for small and straightforward systems but instrumental in building flexible libraries.
PluginConfiguration contains information about the integration of the Plugin with the Core system. The OrchestrationService uses it to identify if it should execute a Plugin and how. The Plugin can extend it to configure internal Plugin behavior. The core system can provide a default configuration for the Plugins.
PluginConfigurationToken, injection token for the PluginConfiguration
CoreConfiguration provides configuration at a Core level, makes the overall system execute in a certain way. 
CoreConfigurationToken, injection token for the CoreConfiguration
The dependency flow would look like Fig.2.


The Angular code
 
